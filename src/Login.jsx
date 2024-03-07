import React, {useEffect, useState} from 'react';

const User = {
    'email': "test@gmail.com",
    "password": "test123!!!"
}

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const [allow, setAllow] = useState(true);

    useEffect(() => {
        setAllow(validEmail && validPassword)
    }, [validEmail, validPassword]);

    function handleEmail(e) {
        setEmail(e.target.value)

        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

        setValidEmail(regex.test(email))
    }

    function handlePassword(e) {
        setPassword(e.target.value)

        const regex = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@%*#^?&\\()\-_=+])(?!.*[^a-zA-z0-9$`~!@%*#^?&\\()\-_=+]).{8,20}$/;

        setValidPassword(regex.test(password))
    }

    function onClickConfirm() {
        if (email === User.email && password === User.password) {
            alert('로그인 성공')
        } else {
            alert('등록되지 않은 회원입니다')
        }
    }

    return (
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>

            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input type="email" className="input" placeholder="이메일을 입력해주세요" value={email} onChange={handleEmail}/>
                </div>

                <div className="errorMessageWrap">
                    {
                        !validEmail && email.length > 0 && (
                            <div>올바른 이메일을 입력해주세요</div>
                        )
                    }
                </div>

                <div className="inputTitle" style={{ marginTop: "26px" }}>비밀번호</div>
                <div className="inputWrap">
                    <input type="password" className="input" placeholder="비밀번호를 입력해주세요" value={password} onChange={handlePassword}/>
                </div>

                <div className="errorMessageWrap">
                    {
                        !validPassword && password.length > 0 && (
                            <div>올바른 비밀번호을 입력해주세요</div>
                        )
                    }
                </div>
            </div>

            <div>
                 <button className="bottomButton" disabled={!allow} onClick={onClickConfirm}>
                     확인
                 </button>
            </div>
        </div>
    );
};

export default Login;