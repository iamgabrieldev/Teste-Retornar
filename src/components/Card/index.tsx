import React from "react"
import { CardItem } from "./card";

interface CardProps {
    title: string;
    className?: string;
    onclick?: any;
}

const Card: React.FC<CardProps> = ({ title, className, onclick }) => {
    return (
        <CardItem onClick={onclick} className={className} style={{cursor: 'pointer'}}>{title}</CardItem>
    )
}

export default Card;