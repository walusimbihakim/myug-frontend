import React from 'react'
import { useHistory } from 'react-router-dom';

export default function TermsPage() {
    const history = useHistory()
    return (
        <>
        <h2>Terms and Conditions</h2>
        <div className="termsBox">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iusto, sunt? Ullam facere atque, repellat amet incidunt s
            int fugiat dolorem ipsam accusamus quod officia debitis re
            m sed quia impedit quo neque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iusto, sunt? Ullam facere atque, repellat amet incidunt s
            int fugiat dolorem ipsam accusamus quod officia debitis re
            m sed quia impedit quo neque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iusto, sunt? Ullam facere atque, repellat amet incidunt s
            int fugiat dolorem ipsam accusamus quod officia debitis re
            m sed quia impedit quo neque?
        </div>
        <button 
              className="primaryButton btn btn-block" 
              onClick={() => {history.goBack()}}>Back</button>
        </>
    )
}
