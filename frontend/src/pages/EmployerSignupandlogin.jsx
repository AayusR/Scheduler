import { useState } from 'react';


import user_icon from '../assets/img/loginsignup/person.png'
import email_icon from '../assets/img/loginsignup/email.png'
import password_icon from '../assets/img/loginsignup/password.png'

const EmployerSignupandlogin =() => {

    const [action, setAction] = useState("EMPLOYER-Sign Up");

    return(
        <div className="employee-signuploginpage">
            <div className="header">
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
            </div>
            <div className="inputs">

                {action==="Login"?<div></div>: 
                <div>

                    <div className="input my-4">
                    <img src ={user_icon} alt=""/>
                    <input type ="text" placeholder='First Name' />
                    </div>

                    <div className="input my-4 ">
                    <img src ={user_icon} alt=""/>
                    <input type ="text" placeholder='Last Name'/>
                    </div>

                    <div className="input my-4 ">
                    <img src ={user_icon} alt=""/>
                    <input type ="text" placeholder='Company'/>
                    </div>

                    <div className="input">
                    <img src ={user_icon} alt=""/>
                    <input type ="text" placeholder='Department'/>
                    </div>


                </div>

                }



                

                <div className="input">
                    <img src ={email_icon} alt=""/>
                    <input type ="email" placeholder='Email ID' />
                </div>

                <div className="input">
                    <img src ={password_icon} alt=""/>
                    <input type ="password" placeholder='Password'/>
                </div>


            </div>
            {action==="EMPLOYER-Sign Up"?<div></div>: 
                <div className="forgot-password"> Lost Password ? <span>Click Here!</span></div>
                }
            

            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={() =>{setAction("EMPLOYER-Sign Up")}}>EMPLOYER-Sign Up
                </div>

                <div className={action==="EMPLOYER-Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Login")}}>Login
                </div>
            </div>
        </div>
    )
}

export default EmployerSignupandlogin