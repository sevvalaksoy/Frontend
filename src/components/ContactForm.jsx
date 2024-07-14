
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { addContact } from "../store/actions/actions";

export default function ContactForm () {
    let history = useHistory();
    let dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
      } = useForm({ 
        defaultValues:{
            name: "",
            company: "",
            phone: "",
            location: "",
            email: "",
        },
        mode: 'onChange' }); 

        function myHandleSubmit(formData ) {
            console.log(formData);
            reset();
            dispatch(addContact(formData));
            toast.success("Beni Tercih ettiğin için Teşekkürler!", {
                position: "top-center"
            })
            history.push("/");
          }

    return (
        <div className="flex justify-between md:flex-row xs:flex-col lg:gap-20 items-center py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 dark:bg-d-body bg-white">
             <div className="w-1/2"> 
                <img className="object-cover rounded-2xl" src={"/pp.jpg"}/>
            </div>
            <form onSubmit={handleSubmit(myHandleSubmit)} className="flex flex-col w-1/2">
            <div className="flex flex-col text-left dark:bg-d-body bg-white gap-4">
                <label htmlFor="name" className="font-Inter md:text-2xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">
                    İsim:
                </label>
                <input className="border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 dark:text-white dark:border-btn-ş dark:bg-btn-bcg text-black border-borderC "
                    id="name"
                    {...register('name', {
                    required: 'İsminizi Girmelisiniz',
                    minLength: {
                    value: 3,
                    message: 'İsminiz en az 3 karakter olmalı',
                    },
                    })}
                />
                <p className="text-red">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col text-left dark:bg-d-body bg-white gap-4">
                <label htmlFor="company" className="font-Inter md:text-2xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">
                    Şirket:
                </label>
                <input className="border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 dark:text-white dark:border-btn-ş dark:bg-btn-bcg text-black border-borderC "
                    id="company"
                    {...register('company', {
                    required: 'Şirket İsmi Girmelisiniz',
                    minLength: {
                    value: 2,
                    message: 'Şirket İsmi en az 2 karakter olmalı',
                    },
                    })}
                />
                <p className="text-red">{errors.company?.message}</p>
            </div>
            <div className="flex flex-col text-left dark:bg-d-body bg-white gap-4">
                <label htmlFor="phone" className="font-Inter md:text-2xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">
                    Telefon:
                </label>
                <input className="border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 dark:text-white dark:border-btn-ş dark:bg-btn-bcg text-purple2 border-borderC "
                    id="phone"
                    {...register('phone', { 
                    required: 'Telefon Numarası Girmelisiniz',
                    minLength: {
                    value: 11,
                    message: 'Telefon numarası en 11 karakter olmalı.',
                    },
                    })}
                />
                <p className="text-red">{errors.phone?.message}</p>
            </div>
            <div className="flex flex-col text-left dark:bg-d-body bg-white gap-4">
                <label htmlFor="location" className="font-Inter md:text-2xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">
                    Konum:
                </label>
                <input className="border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 dark:text-white dark:border-btn-ş dark:bg-btn-bcg text-purple2 border-borderC "
                    id="location"
                    {...register('location', {
                    required: 'Lokasyon Girmelisiniz',
                    minLength: {
                    value: 1,
                    message: 'Şehir ve ilçe olarak giriniz',
                    },
                    })}
                />
                <p className="text-red">{errors.location?.message}</p>
            </div>
            <div className="flex flex-col text-left dark:bg-d-body bg-white gap-4">
                <label htmlFor="email" className="font-Inter md:text-2xl font-medium text-left sm:text-lg xs:text-base dark:text-t-lilac text-purple ">
                    Email:
                </label>
                <input className="border-solid border-[1px] rounded-md lg:text-lg md:text-sm font-Inter font-medium md:py-1 md:px-4 xs:text-xs xs:px-2 xs:py-0 dark:text-white dark:border-btn-ş dark:bg-btn-bcg text-purple2 border-borderC "
                    id="email"
                    {...register('email', {
                    required: 'Email Girmelisiniz',
                    pattern: {
                    value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm, 
                    message: 'Lütfen geçerli bir eposta giriniz.',
                    },
                    })}
                />
                <p className="text-red">{errors.email?.message}</p>
            </div>
            <button type="submit" disabled={!isValid} className="border-solid border-[1px] w-1/3 mt-10 bg-borderC flex justify-center dark:bg-btn-lilac rounded-md lg:text-lg font-Inter lg:font-medium dark:text-r-black text-white cursor-pointer lg:py-3 lg:px-8 md:text-base md:py-[9px] md:px-2 xs:text-sm xs:px-2 xs:py-2">
             Hire me
            </button>
            </form>
           
        </div>
    )
}