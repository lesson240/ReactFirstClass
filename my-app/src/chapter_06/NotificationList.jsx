import React from "react";
import Notifacation from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id:3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotifacationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifacations: [],
        };
    }

    componentDidMount() {
        const { notifacations } = this.state;
        timer = setInterval(() => {
            if (notifacations.length < reservedNotifications.length) {
                const index = notifacations.length;
                notifacations.push(reservedNotifications[index]);
                this.setState({
                    notifacations: notifacations,
                });
            } else {
                this.setState({
                    notifacations: [],
                });
                clearInterval(timer);
            }

        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifacations.map((notifacation) => {
                    return (
                        <Notifacation 
                            key={notifacation.id}
                            id={notifacation.id}
                            message={notifacation.message} 
                        />
                    );
                })}
            </div>
        );
    }

}

export default NotifacationList;