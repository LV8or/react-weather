import './styles.css';

export default function ErrorMsg({err}) {
    return (
        <div className="error-msg-cont">{err}</div>
    )
}