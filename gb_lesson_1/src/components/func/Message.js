import style from './Form.module.css'

export const Msg = (props) => {
    

    return (
        <>
        <div className={style.cover}>
        <p className={style.bcg}> {props.text} </p>
        </div>
        
        </>
    );
}