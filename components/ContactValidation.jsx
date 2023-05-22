
import React, { useState } from 'react';
import Swal from 'sweetalert2';


const ContactValidation = () => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = () => {
        let isValid = true;
    
        if (name.length < 6) {
            setNameError('Name should have at least 6 characters');
            setTimeout(() => {
                setNameError('');
            }, 3000);
            isValid = false;
        }
    
        if (!email.includes('@')) {
            setEmailError('Email should have an @');
            setTimeout(() => {
                setEmailError('');
            }, 3000);
            isValid = false;
        }
    
        if (phone.length < 6) {
            setPhoneError('Phone should have at least 6 characters');
            setTimeout(() => {
                setPhoneError('');
            }, 3000);
            isValid = false;
        }
    
        if (message.length < 10) {
            setMessageError('Message should have at least 10 characters');
            setTimeout(() => {
                setMessageError('');
            }, 3000);
            isValid = false;
        }
    
        // Aquí puedes realizar acciones adicionales cuando se envía el formulario
        console.log('Formulario enviado');
        if (isValid) {
            Swal.fire({
                icon: 'success',
                title: 'Formulario enviado',
                text: 'Gracias por contactarnos',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#2563eb',
            });
            setTimeout(() => {
                handleReset();
            }, 2500);
        }
    };
    

    const handleReset = () => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <div>
            <div className='bg-white max-w-[600px] mt-10 lg:m-10 rounded-3xl'>
                <div className='pt-10 pb-10'>
                    <div className='flex-col justify-start px-10'>
                        <label htmlFor='' className='font-secundario text-xl'>
                            Name
                        </label>
                        <input
                            type='text'
                            placeholder='Your name'
                            className='bg-gray-100 w-full border-[1px] border-gray-300 p-3 mt-2 rounded-xl'
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                        {
                            nameError && <p className='text-red-500 font-secundario mt-2 text-center text-lg'>{nameError}</p>
                        }
                    </div>

                    <div className='flex-col mt-8 justify-start px-10'>
                        <label htmlFor='' className='font-secundario text-xl'>
                            Email
                        </label>
                        <input
                            type='email'
                            placeholder='Your email'
                            className='bg-gray-100 w-full border-[1px] border-gray-300 p-3 mt-2 rounded-xl'
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        {
                            emailError && <p className='text-red-500 font-secundario mt-2 text-center text-lg'>{emailError}</p>
                        }
                    </div>

                    <div className='flex-col mt-8 justify-start px-10'>
                        <label htmlFor='' className='font-secundario text-xl'>
                            Phone
                        </label>
                        <input
                            type='text'
                            placeholder='Your phone'
                            className='bg-gray-100 w-full border-[1px] border-gray-300 p-3 mt-2 rounded-xl'
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                        {
                            phoneError && <p className='text-red-500 font-secundario mt-2 text-center text-lg'>{phoneError}</p>
                        }
                    </div>

                    <div className='flex-col mt-8 justify-start px-10'>
                        <label htmlFor='' className='font-secundario text-xl'>
                            Message
                        </label>
                        <textarea
                            type='text'
                            placeholder='Your message'
                            className='bg-gray-100 w-full  border-[1px] border-gray-300 p-3 mt-2 rounded-xl h-[10rem]'
                            value={message}
                            onChange={handleMessageChange}
                            required
                        />
                        {
                            messageError && <p className='text-red-500 font-secundario mt-2 text-center text-lg'>{messageError}</p>
                        }
                    </div>

                    <div className='flex px-10 gap-4'>
                        <button
                            className='text-red-500 w-full p-2 mt-8 font-secundario text-xl'
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                        <div className='mt-8 bg-gradient-to-tr from-blue-600 to-indigo-300 w-full rounded-3xl'>
                            <button
                                className='text-white w-full text-center p-2 font-secundario text-xl rounded-3xl hover:text-black duration-300'
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactValidation;
