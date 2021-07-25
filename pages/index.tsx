import React, { useEffect, useState } from 'react'
import axios from 'axios'


// useFormInput to handle the input change
const useFormInput = (initialValue: any) => {
	const [value, setValue] = useState(initialValue);
	const handleChange = (e: { target: { value: any; }; }) => setValue(e.target.value)
	return { value, onChange: handleChange }
}



export default function Index() {

	const api = 'https://jsonplaceholder.typicode.com/todos'

	const user = useFormInput('')
	const [data, setData] = useState([])
	const [step, setStep] = useState(1)
	const [userSelected, setUserSelected] = useState({})

	useEffect(() => {
		axios.get(api)
			.then(resp => setData(resp.data))
	}, [])

	return (
		<div className="bg-red-200 w-full min-h-screen p-3 md:p-12">
			<h3 className="text-center text-4xl">React search system</h3>
			<p className="text-center">After load the JSON data, you can filter the item's text meanwhile you type in the input</p>
			
			<input className="p-2 rounded mx-auto block my-3" type="text" {...user} placeholder="Type here..." />

			<div className="container mx-auto">
				<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
					{data && data.map(x => {
						if (x.title.toLowerCase().includes(user.value.toLowerCase())) {
							return (
								<div key={x.id} className="border rounded-lg p-3 m-3 bg-white border border-red-600" >
									<span>{x.title}</span>
								</div>
							)
						}
					})}
				</div>
			</div>
		</div>
	)
}
