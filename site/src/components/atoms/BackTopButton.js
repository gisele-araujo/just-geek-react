import { BackTop } from 'antd';
import { Colors } from '../../shared/Colors';

export function BackTopButton() {
    const style = {
        height: 50,
        width: 50,
        lineHeight: '50px',
        borderRadius: '100%',
        backgroundColor: Colors.pink.hot,
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    };
    return (
        <>
            <BackTop>
                <div style={style}>UP</div>
            </BackTop>
        </>
    )
}