'use client';

import { useUser } from '@src/contexts';
import { apiClient } from '@src/services';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { PiXBold } from 'react-icons/pi';
import { RiLoader5Fill } from 'react-icons/ri';
import ReactInputMask from 'react-input-mask';

interface IFormData {
  document: string;
  name: string;
  surname: string;
  typeKey: 'document' | 'phoneNumber' | 'email' | 'randomKey';
  key: string;
  value: number;
}

export function Withdraw({ close }: { close: () => void }) {
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({});

  useEffect(() => {
    if (user) {
      setValue('name', user.name.split(' ')[0]);
      setValue('surname', user.name.split(' ').pop() as string);
      setValue('document', user.document.document);
    }
  }, [user]);

  const value = watch('value');

  async function onSubmit({ document, name, surname, value, typeKey, key }: IFormData) {
    setLoading(true);

    if (!value) {
      toast.error('Você precisa inserir o valor.');

      return setLoading(false);
    }

    if (value < 0) {
      toast.error('O valor não pode ser negativo.');

      return setLoading(false);
    }

    if (value < 20) {
      toast.error('O valor mínimo de saque é de R$20,00.');

      return setLoading(false);
    }

    if (!document || !name || !surname || !typeKey || !key) {
      toast.error('Você precisa preencher os campos.');

      return setLoading(false);
    }

    await apiClient
      .post('/withdraws/request', {
        document,
        name,
        surname,
        value,
        typeKey,
        key,
      })
      .then(response => {
        toast.success(response.data.message);

        close();
      })
      .catch(error => {
        toast.error(error.response.data.message);

        console.log(error.response.data);

        return setLoading(false);
      });
  }

  const handleOverlayClick = () => {
    close();
  };

  if (!user) return;

  return (
    <motion.div
      id="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="z-48 fixed w-[100vw] h-[100vh] top-0 left-0 bg-[linear-gradient(#212134,#15171B)] lg:bg-gradient-to-t lg:to-dark-600/70 lg:from-dark-600/70"
      onClick={handleOverlayClick}
    >
      <div className="z-49 fixed top-0 left-0 flex items-center justify-center overflow-auto w-[100vw] h-[-webkit-fill-available]">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="z-49 bg-[linear-gradient(#212134,#15171B)] relative w-full lg:max-w-xl lg:h-fit h-full p-6 lg:rounded-[20px] lg:my-10"
          onClick={e => e.stopPropagation()}
        >
          <div className="flex flex-col gap-[30px] pt-[40px] pb-[20px]">
            <button
              onClick={close}
              className="absolute top-4 right-4 px-1 py-1 rounded-full text-white text-primary flex items-center gap-2 transition-all duration-300 ease-in disabled:opacity-50"
            >
              <PiXBold size={24} />
            </button>
            <div className="flex flex-col justify-center items-center text-center">
              <h1 className="text-[18px] text-white font-bold">Saque</h1>
              <p className="my-6 text-secondary-100">
                Você precisa apostar{' '}
                <b className="text-white">
                  {user.rollover.toLocaleString('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  })}
                </b>{' '}
                para retirar.
              </p>
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-[5px]">
                <label
                  htmlFor="document"
                  className="text-secondary-100 text-[14px] font-medium"
                >
                  CPF
                </label>
                <ReactInputMask
                  id="document"
                  type="text"
                  className={`bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
                    errors.document && 'outline-red-500'
                  }`}
                  mask="999.999.999-99"
                  placeholder="Seu CPF"
                  readOnly={loading}
                  {...register('document', { required: true })}
                />
                {errors.document && (
                  <p className="text-[14px] text-red-500">
                    Você precisa inserir o documento.
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-full flex flex-col gap-[5px]">
                  <label
                    htmlFor="name"
                    className="text-secondary-100 text-[14px] font-medium"
                  >
                    Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    className={`w-full bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
                      errors.name && 'outline-red-500'
                    }`}
                    readOnly={loading}
                    {...register('name', { required: true })}
                  />
                  {errors.name && (
                    <p className="text-[14px] text-red-500">
                      Você precisa inserir o nome.
                    </p>
                  )}
                </div>
                <div className="flex w-full flex-col gap-[5px]">
                  <label
                    htmlFor="surname"
                    className="text-secondary-100 text-[14px] font-medium"
                  >
                    Sobrenome
                  </label>
                  <input
                    id="surname"
                    type="text"
                    placeholder="Seu sobrenome"
                    className={`w-full bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
                      errors.surname && 'outline-red-500'
                    }`}
                    readOnly={loading}
                    {...register('surname', { required: true })}
                  />
                  {errors.surname && (
                    <p className="text-[14px] text-red-500">
                      Você precisa inserir o sobrenome.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex w-full flex-col gap-[5px]">
                <label htmlFor="typeKey" className="text-white">
                  Tipo da chave
                </label>
                <select
                  id="typeKey"
                  className={`w-full bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
                    errors.typeKey && 'outline-red-500'
                  }`}
                  required
                  disabled={loading}
                  {...register('typeKey', { required: true })}
                >
                  <option value="" selected>
                    Selecione
                  </option>
                  <option value="document">Documento (CPF/CNPJ)</option>
                  <option value="phoneNumber">Celular</option>
                  <option value="email">E-mail</option>
                  <option value="randomKey">Chave aleatória</option>
                </select>
                {errors.surname && (
                  <p className="text-[14px] text-red-500">
                    Você precisa inserir o tipo da chave.
                  </p>
                )}
              </div>
              <div className="flex w-full flex-col gap-[5px]">
                <label
                  htmlFor="key"
                  className="text-secondary-100 text-[14px] font-medium"
                >
                  Chave Pix
                </label>
                <input
                  id="key"
                  type="text"
                  placeholder="Sua chave pix"
                  className={`w-full bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
                    errors.key && 'outline-red-500'
                  }`}
                  readOnly={loading}
                  {...register('key', { required: true })}
                />
                {errors.key && (
                  <p className="text-[14px] text-red-500">
                    Você precisa inserir a chave pix.
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-[5px]">
                <label
                  htmlFor="value"
                  className="text-secondary-100 text-[14px] font-medium"
                >
                  Valor do saque
                </label>
                <input
                  id="value"
                  type="number"
                  placeholder="Mín. R$20,00, Máx. R$20.000,00"
                  className={`bg-[#242435] px-[15px] text-[14px] py-[10px] placeholder:text-[#45454D] text-secondary-100 rounded-[5px] outline-none ${
                    errors.value && 'outline-red-500'
                  }`}
                  max={20000}
                  min={0}
                  readOnly={loading}
                  {...register('value', { required: true })}
                />
                {errors.value && (
                  <p className="text-[14px] text-red-500">
                    Você precisa inserir o valor.
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="bg-primary-100 mt-5 hover:bg-primary-200 text-white rounded-[5px] py-[15px] w-full font-medium text-[14px] transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
                arial-label="Depositar"
              >
                {loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <RiLoader5Fill className="animate-spin" size={20} /> Carregando...
                  </span>
                ) : (
                  'Sacar'
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
