import React, { ReactElement } from "react";
import './Notification.css'

interface NotificationProps {

}

export class Notification extends React.Component<NotificationProps> {
    
    public render():ReactElement {
        return (
            <div className="floating_container">
                <div className="notification_field">
                    <p className="notification_text">
                        ALLES IS KAPOT
                    </p>
                </div>
            </div>
        )
    }
}