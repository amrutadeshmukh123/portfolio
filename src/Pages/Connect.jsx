import axios from 'axios';
import './Connect.css';
import toast, { Toaster } from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Connect() {




    const [loading, setloading] = useState(false)
    const { register, handleSubmit, reset } = useForm()

    const onMailSend = (data) => {
        console.log(data)
        setloading(true)
        setTimeout(async () => {
            const formData = new FormData()
            console.log(data)
            formData.append('fullname', data.fullname)
            formData.append('emailTo', data.emailTo)
            formData.append('subject', data.subject)
            formData.append('message', data.message)
            formData.append('attachment', data.attachment[0])
            const res = await axios.post('http://localhost:2000/send-email', formData, {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            })
            const resData = res.data
            setloading(false)
            if (resData.status) {
                reset()
                toast.success("Email sent successfully..!!")

            } else {
                toast.error(resData.message)
            }
        }, 1000);
    }


    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 2000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 2000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className="contact">
                <div className="contact-container">
                    <div className="contact-content">
                        <h2>Get In Touch</h2>
                        <p>Let's connect! If you'd like to discuss opportunities, collaborations, or anything else, you're in the right place.</p>
                    </div>
                    <div className="contact-info">
                        <div className="box">
                            <div className="icn"> <i className="fa-solid fa-location-dot"></i></div>
                            <div className="text">
                                <h3>Address</h3>
                                <p>Ugawa, Akot Road ,Akola , Maharashra - 444 006</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icn"> <i className="fa-solid fa-envelope"></i></div>
                            <div className="text">
                                <h3>Email Address</h3>
                                <p>amrutaingle175@gmail.com</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icn"> <i className="fa-solid fa-phone-volume"></i></div>
                            <div className="text">
                                <h3>Mobile No</h3>
                                <p>+91 9022**6089</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="connect-container">
                    <form onSubmit={handleSubmit(onMailSend)}>
                        <div className="title">
                            <h2>Send your requirements</h2>
                        </div>
                        <div className="input-field">
                            <label>Fullname</label>
                            <input disabled={loading} {...register('fullname')} type="text" required />
                        </div>
                        <div className="input-field">
                            <label>Email Address</label>
                            <input disabled={loading} {...register('emailTo')} type="email" required />
                        </div>
                        <div className="input-field">
                            <label>Subject</label>
                            <input disabled={loading} {...register('subject')} type="text" required />
                        </div>
                        <div className="input-field">
                            <label>Requirement</label>
                            <textarea disabled={loading} {...register('message')} rows='3' required></textarea>
                        </div>
                        <div className="input-field">
                            <label>Attachment</label>
                            <input disabled={loading} {...register('attachment')} type="file" />
                        </div>
                        <button disabled={loading} type='submit'>
                            {loading ? 'Sending Mail...!!' : 'Send Mail'}
                        </button>
                    </form>
                </div>
            </div>
            {/* <div className="connect-container">
                <form onSubmit={handleSubmit(onMailSend)}>
                    <div className="title">
                        <h2>Send your requirements</h2>
                    </div>
                    <div className="input-field">
                        <label>Fullname</label>
                        <input disabled={loading} {...register('fullname')} type="text" required />
                    </div>
                    <div className="input-field">
                        <label>Email Address</label>
                        <input disabled={loading} {...register('emailTo')} type="email" required />
                    </div>
                    <div className="input-field">
                        <label>Subject</label>
                        <input disabled={loading} {...register('subject')} type="text" required />
                    </div>
                    <div className="input-field">
                        <label>Requirement</label>
                        <textarea disabled={loading} {...register('message')} rows='3' required></textarea>
                    </div>
                    <div className="input-field">
                        <label>Attachment</label>
                        <input disabled={loading} {...register('attachment')} type="file" required />
                    </div>
                    <button disabled={loading} type='submit'>
                        {loading ? 'Sending Mail...!!' : 'Send Mail'}
                    </button>
                </form>
            </div> */}
        </>
    )
}