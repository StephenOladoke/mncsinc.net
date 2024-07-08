'use client'
import { useState } from 'react'
export default function Accordion1() {
    const [isActive, setIsActive] = useState(1)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    return (
        <>
            <div className="tf-flat-accordion2">
                <div className="flat-toggle2 active">
                    <h6  className={isActive === 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(1)}>How do you ensure the quality and consistency of the services you provide?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 1 ? "block" : "none"}` }}>
                        <p>We employ a rigorous quality assurance process that includes regular training for our staff, detailed compliance audits, and continuous improvement programs. Our team of 
                            experts monitors each step of our service delivery, from initial client intake to follow-up assessments, ensuring we meet and exceed regulatory standards and client expectations.</p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6  className={isActive === 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(2)}>Can you customize the 245D Program Books to fit the specific needs of our agency?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 2 ? "block" : "none"}` }}>
                        <p>Absolutely! We understand that each agency has unique requirements and challenges. Our team works closely with you to customize the 245D Program Books, ensuring they align with your 
                            specific operational procedures and compliance needs. This tailored approach helps enhance the effectiveness and relevance of your programs.</p>
                    </div>
                </div>
                <div className="flat-toggle2">
                    <h6  className={isActive === 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleClick(3)}>How do you approach regulatory compliance for new healthcare agencies?</h6>
                    <div className="toggle-content" style={{ display: `${isActive === 3 ? "block" : "none"}` }}>
                        <p>For new healthcare agencies, we start with a thorough assessment to understand your current compliance status and specific needs. We then develop a customized compliance plan, provide 
                            detailed guidance on meeting DHS standards, and offer ongoing support through audits, training, and documentation reviews to ensure continuous compliance.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
