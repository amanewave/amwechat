import React, { useState } from 'react';
import { RegForm } from './RegForm';
import { LogForm } from './LogForm';

//<StyledClose src={Close} onClick={()=>setActive(false)} />
export const Modal = () => { 
	const [auth, setAuth] = useState(true)
    return (
			<>
				{auth === true ? (
					<RegForm auth={auth} setAuth={setAuth} />
				) : (
					<LogForm auth={auth} setAuth={setAuth} />
				)}
			</>
		)
};