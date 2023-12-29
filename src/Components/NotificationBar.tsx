import {notification} from "antd";
import { CloseCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { NotificationBarProps } from "@/app/Types/NotificationBar";

const [api, contextHolder] = notification.useNotification();

interface NotificationProps {
    notification: NotificationBarProps
}

function NotificationBar ({notification}: NotificationProps) {

    const openNotification = (messageTitle: string, description: string, type:string) => {
      api.open({
        message: messageTitle,
        description: description,
        icon: type === 'success' ? <CheckCircleOutlined /> : <CloseCircleOutlined />
    })
    }
    openNotification(notification.messageTitle, notification.description, notification.type);
}


export default NotificationBar;