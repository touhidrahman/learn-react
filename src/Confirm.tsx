import React from 'react'
import './Confirm.css'

interface IProps {
    title: string
    content: string
    open: boolean
    cancelCaption?: string
    okCaption?: string
    onOkClick: () => void
    onCancelClick: () => void
}

const Confirm: React.SFC<IProps> = (props) => {
    const [cancelClickCount, setCancelClickCount] = React.useState(0)

    React.useEffect(() => {
        return () => {
            return
        }
    }, [])

    const handleOkClick = () => {
        props.onOkClick()
    }

    const handleCancelClick = () => {
        const newCount = cancelClickCount + 1
        setCancelClickCount(newCount)
        if (newCount >= 2) props.onCancelClick()
    }

    return (
        <div className={props.open ? 'confirm-wrapper confirm-visible' : 'confirm-wrapper'}>
            <div className="confirm-container">
                <div className="confirm-title-container">
                    <span>{props.title}</span>
                </div>
                <div className="confirm-content-container">
                    <p>{props.content}</p>
                </div>
                <div className="confirm-buttons-container">
                    <button className="confirm-cancel" onClick={handleCancelClick}>
                        {cancelClickCount === 0 ? props.cancelCaption : 'Really?'}
                    </button>
                    <button className="confirm-ok" onClick={handleOkClick}>
                        {props.okCaption}
                    </button>
                </div>
            </div>
        </div>
    )
}

Confirm.defaultProps = {
    cancelCaption: 'Cancel',
    okCaption: 'OK',
}

const ConfirmMemoized = React.memo(Confirm)
export default ConfirmMemoized
