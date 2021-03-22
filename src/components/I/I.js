import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFileAlt,
    faCalendarAlt,
    faFileCode,
    faCogs,
    faCodeBranch,
    faTools,
    faEllipsisV,
    faEdit,
    faCode,
    faLock,
    faLockOpen,
    faEye,
} from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
     faTelegram
} from '@fortawesome/free-brands-svg-icons'
export const I = (props) => {
    const {children, ...other} = props;
    const RenderIcon = () => {
        switch (children) {

            case 'task': return <FontAwesomeIcon icon={faFileAlt} {...other} />
            case 'schedule': return <FontAwesomeIcon icon={faCalendarAlt} {...other} />
            case 'fileCode': return <FontAwesomeIcon icon={faFileCode} {...other} />
            case 'code': return <FontAwesomeIcon icon={faCode} {...other} />
            case 'settings': return <FontAwesomeIcon icon={faCogs} {...other} />
            case 'github': return <FontAwesomeIcon icon={faCodeBranch} {...other} />
            case 'linkedin': return <FontAwesomeIcon icon={faLinkedin} {...other} />
            case 'telegram': return <FontAwesomeIcon icon={faTelegram} {...other} />
            case 'edit': return <FontAwesomeIcon icon={faEdit} {...other} />
            case 'preferences': return <FontAwesomeIcon icon={faTools} {...other} />
            case 'menu': return <FontAwesomeIcon icon={faEllipsisV} {...other} />
            case 'lock': return <FontAwesomeIcon icon={faLock} {...other} />
            case 'open': return <FontAwesomeIcon icon={faLockOpen} {...other} />
            case 'preview': return <FontAwesomeIcon icon={faEye} {...other} />


            default: return <></>
        }
    }

    return (
        <RenderIcon/>
    )
}
