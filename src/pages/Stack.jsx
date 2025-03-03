import React, { useEffect } from 'react';
import { SiFramer, SiFigma, SiReact, SiNodedotjs } from 'react-icons/si';
import { FaLemon } from 'react-icons/fa';
import { color, motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const stackItems= [
    {
        id: 1,
        name: "Framer",
        icon: <SiFramer size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 2,
        name: "Figma",
        icon: <SiFigma size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 3,
        name: "React",
        icon: <SiReact size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 4,
        name: "Node.js",
        icon: <SiNodedotjs size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 5,
        name: "Lemon",
        icon: <SFaLemon size={100}/>,
        color: "text-emerald-200",
    },
];

export const Stack = () => {

    const controls = useAnimation();

    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls. inView]);

    return(
        <></>
    );
};