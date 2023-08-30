import error from './error.gif';

const ErrorMessage = () => {
    return (
        <div style={{display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'center',
                    alignItems: 'center'}}>
            <img src={error} 
                alt="error message" 
                style={{display: 'block',
                        width: '60px',
                        height: '50px', 
                        }}
                />
            <p style={{
                fontSize: '20px', 
                textAlign: 'center', 
                paddingTop: '20px'
                }}>
                An error has occurred, please try again
            </p>
        </div>
    )
}

export default ErrorMessage