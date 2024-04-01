import hostapi from './APIHOST';


export const SignupAPI = async(data)=>{
    const params = new URLSearchParams();
    for(const[key,value] of Object.entries(data)){
        params.append(key,value);
    }
    try{
        const response = await fetch(`${hostapi}/api/signup`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'  
            },
            body:params
        });
        const res= await response.json();
        return res;
    }catch(error){
        console.error('Error:', error);
    }
};

export const verifyOtpApi = async(email,otp)=>{

    try{
        const params = new URLSearchParams();
        params.append('email',email);
        params.append('otp',otp);
        const response = await fetch(`${hostapi}/api/verifyotp`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded' 
            },body:params
        });
        return await response.json();
    }catch(error){
        console.log(error);
    }
}

export const RequestOTPApi = async(email)=>{
    const params = new URLSearchParams();
    params.append('email',email);
    const response = await fetch(`${hostapi}/api/forgot-password`,{
        method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded' 
            },body:params
    });
    return await response.json();
}


export const LogInAPI = async(email,password)=>{
    const params = new URLSearchParams();
    params.append('username',email);
    params.append('password',password);
    const response = await fetch(`${hostapi}/api/login`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded' 
        },body:params
    });
    return await response.json();
}

export const UpdatePasswordAPI = async(email,otp,password)=>{
    const params = new URLSearchParams();
    params.append('email',email);
    params.append('otp',otp);
    params.append('password',password);
    const response = await fetch(`${hostapi}/api/update-password`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded' 
        },body:params
    });
    return await response.json();
}