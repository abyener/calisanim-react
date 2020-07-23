import React from 'react'
import { IoIosRestaurant, IoIosPaw } from 'react-icons/io'
import { FaBroom, FaRegCheckCircle } from 'react-icons/fa';

export default function Ability(props) {
    // { JSON.stringify(props) }
    const icon =
        {
            check: <FaRegCheckCircle />,
            cook: <IoIosRestaurant size="lg" />,
            pet: <IoIosPaw size="lg" />,
            clean: <FaBroom size="lg" />
        }[props.abil.icon]

    if (props.abil.position === "mid") {
        return (
            <div className="ability-icon">
                <div className="icon-bg">
                    <span className="icon-mid">
                        {icon}
                    </span>
                </div>
                <p> {props.abil.title} </p>
            </div>

        )
    } else {
        return (
            <span className="icon-span">{icon} {props.abil.title} </span>
        )
    }
}