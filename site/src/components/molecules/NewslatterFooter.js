import { Input } from "antd";
import styled from "styled-components";
import { Colors } from "../../shared/Colors";
import { Button } from "../atoms/Button";
import { SubTitle } from "../atoms/Titles";

export function NewslatterFooter() {
    return (
        <>
            <Newslatter>
                <div className='newslatter-title'>
                    <SubTitle text='Receba ofertas e novidades por e-mail' />
                </div>
                <form className='newslatter-form'>
                    <Input placeholder='Seu nome' className="newslatter-input" required />
                    <Input placeholder='Seu email' className="newslatter-input" type='email' required />
                    <Button type='submit' contentText='ASSINAR' primary={false} size='small' style={{ width: '300px' }} />
                </form>
            </Newslatter>
        </>
    )
}

const Newslatter = styled.div`
padding: 30px 5%;
max-width: 1600px;
margin: 0 auto;
width: 100%;
display: flex;
align-items: center;

@media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .newslatter-form {
        flex-direction: column;
        align-items: flex-start !important;
    }

    .newslatter-input {
        width: 100% !important;
        margin: 10px 0;
    }

    button {
        width: 100% !important;
    }
}

.newslatter-title h3 {
    width: 285px;
    margin-right: 30px;
}

.newslatter-input {
    width: 70%;
    margin-right: 10px;
}

.newslatter-form {
    width: 100%;
    display: flex;
    align-items: center;
}

`