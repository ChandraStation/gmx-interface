import React from 'react'
import cx from "classnames";
import { motion, AnimatePresence } from "framer-motion"

import { FaTimes } from 'react-icons/fa'

import './Modal.css';

export default function Modal(props) {
  const { isVisible, setIsVisible, className, zIndex } = props

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }

  return (
    <AnimatePresence>
      {isVisible && <motion.div
          className={cx("Modal", className)}
          style={{zIndex}}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeVariants}
          transition={{ duration: 0.2 }}
        >
        <div className="Modal-backdrop" onClick={() => setIsVisible(false)}></div>
        <div className="Modal-content App-box-solid">
          <div className="Modal-title-bar">
            <div className="Modal-title">
              {props.label}
            </div>
            <div className="Modal-close-button" onClick={() => setIsVisible(false)}><FaTimes className="Modal-close-icon" /></div>
          </div>
          {props.children}
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}
