
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";
import { addContact } from "../store/actions/actions";
import { useAddContact } from "../services/tanStack";

export default function ContactForm () {
    let history = useHistory();
    let dispatch = useDispatch();
    const lan = useSelector(myStore=>myStore.lan);
    const person = useSelector(myStore=>myStore.contact);
   
    const mutation = useAddContact();
    
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
            if(!isValid)return;
            console.log(formData);
            if(person.name===formData.name) {
                toast.error(lan==="eng"?`${formData.name} already has a registiration.`:`${formData.name} adı ile daha önce kayıt yapılmış!`, {
                    position: "top-center"
                })
            } else {
                reset();
                dispatch(addContact(formData)); 
                mutation.mutate(formData);
                toast.success(lan==="eng"?"Thank you for reaching out to me!":"Beni Tercih ettiğin için Teşekkürler!", {
                    position: "top-center"
                })
                history.push("/");
            }
          }

         

    return (
        <div className="flex justify-between lg:flex-row xs:flex-col lg:gap-20 items-center py-12 lg:px-20 md:px-10 sm:gap-12 sm:px-8 xs:gap-8 xs:px-4 xs:py-8 dark:bg-d-body bg-white">
            <div className="w-1/2"> 
                <img className="object-cover rounded-2xl" src={"/pp.jpg"}/>
            </div>
            <form onSubmit={handleSubmit(myHandleSubmit)} className="flex flex-col w-1/2 xs:w-3/4">
            <div className="formdiv">
                <label htmlFor="name" className="formlabel ">
                    {lan==="eng"?"Name:":"İsim:"}
                </label>
                <input className="formalanı"
                    id="name"
                    data-cy="name-input"
                    {...register('name', {
                    required: lan==="eng"?"Name is required":'İsminizi Girmelisiniz',
                    minLength: {
                    value: 3,
                    message: lan==="eng"?"Name must have at least 3 character ":'İsminiz en az 3 karakter olmalı',
                    },
                    })}
                />
                <p className="text-red">{errors.name?.message}</p>
            </div>
            <div className="formdiv">
                <label htmlFor="company" className="formlabel ">
                {lan==="eng"?"Company:":"Şirket:"}
                </label>
                <input className="formalanı"
                    id="company"
                    {...register('company', {
                    required: lan==="eng"?"Company name is required":'Şirket İsmi Girmelisiniz',
                    minLength: {
                    value: 2,
                    message: lan==="eng"?"Company name must have at least 2 character ":'Şirket İsmi en az 2 karakter olmalı',
                    },
                    })}
                />
                <p className="text-red">{errors.company?.message}</p>
            </div>
            <div className="formdiv">
                <label htmlFor="phone" className="formlabel">
                {lan==="eng"?"Phone:":"Telefone:"}
                </label>
                <input className="formalanı"
                    id="phone"
                    {...register('phone', { 
                    required: lan==="eng"?"Phone number is required":'Telefon Numarası Girmelisiniz',
                    minLength: {
                    value: 11,
                    message: lan==="eng"?"Phone must have 11 numbers":'Telefon numarası 11 karakter olmalı.',
                    },
                    })}
                />
                <p className="text-red">{errors.phone?.message}</p>
            </div>
            <div className="formdiv">
                <label htmlFor="location" className="formlabel">
                {lan==="eng"?"Location:":"Konum:"}
                </label>
                <input className="formalanı "
                    id="location"
                    {...register('location', {
                    required: lan==="eng"?"Location is required":'Lokasyon Girmelisiniz',
                    minLength: {
                    value: 2,
                    message: lan==="eng"?"Type as City and District":'Şehir ve ilçe olarak giriniz',
                    },
                    })}
                />
                <p className="text-red">{errors.location?.message}</p>
            </div>
            <div className="formdiv">
                <label htmlFor="email" className="formlabel">
                    Email:
                </label>
                <input className="formalanı"
                    id="email"
                    {...register('email', {
                    required: lan==="eng"?"Email is required":'Email Girmelisiniz',
                    pattern: {
                    value: /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm, 
                    message: lan==="eng"?"Please enter a valid mail":'Lütfen geçerli bir eposta giriniz.',
                    },
                    })}
                />
                <p className="text-red">{errors.email?.message}</p>
            </div>
            <button type="submit" disabled={!isValid} className="border-solid border-[1px] md:w-1/3 mt-10 bg-borderC flex justify-center dark:bg-btn-lilac rounded-md lg:text-lg font-Inter lg:font-medium dark:text-r-black text-white cursor-pointer lg:py-3 lg:px-4 md:text-base md:py-[9px] md:px-2 xs:text-sm xs:px-2 xs:py-2">
             Hire me
            </button>
            </form>
           
        </div>
    )
}