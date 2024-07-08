'use client'
import { useState } from 'react'
export default function Accordion2() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="tf-flat-accordion2">
                <div className="flat-toggle2">
                    <h6 className={isActive === 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(1)}>What is involved in your staff development services?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p>Our staff development services encompass a range of activities designed to enhance the skills and competencies of your team. This includes customized training programs, 
                            workshops, coaching sessions, and performance assessments. We focus on building a knowledgeable and capable workforce that can deliver high-quality care and maintain regulatory compliance.</p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6 className={isActive === 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(2)}>How do you handle follow-up assessments to monitor client progress?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p>Follow-up assessments are a critical part of our service. We conduct regular, scheduled evaluations to monitor client progress, identify any emerging needs, and adjust care plans as necessary. 
                            These assessments ensure that clients receive the most effective and personalized care, supporting their ongoing development and well-being.</p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6 className={isActive === 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(3)}>What kind of support do you offer during the interim management phase?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p>During the interim management phase, we provide comprehensive support that includes strategic planning, operational oversight, staff training, and regulatory compliance. Our experienced 
                            interim managers step in to stabilize operations, address any immediate challenges, and set a solid foundation for long-term success.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
