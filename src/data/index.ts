const Data = (
	{
		"first_name": "John",
		"last_name": "Doe",
		"description": "loren",
		"job": "Software Engeenier",
		"mail": "teste@teste.com",
		"phone": "551133224455",
		"foto": "teste",
		"education": [
			{
				"year_conclusion": 2024,
				"description": "Bachelor Computer Science",
				"institution": "Facens"
			},
			{
				"year_conclusion": 2024,
				"description": "Bachelor Computer Science",
				"institution": "Facens"
			}
		],
		"experience": [
			{
				"year_start": "2022",
				"year_end": null, // if year is null means that is present
				"job_title": "Software Engeenier",
				"company_name": "Lorem",
				"job_description": "lorem lorem lorem lorem lorem"
			},
			{
				"year_start": "2020",
				"year_end": "2021", // if year is null means that is present
				"job_title": "Software Engeenier",
				"company_name": "Lorem",
				"job_description": "lorem lorem lorem lorem lorem"
			}
		],
		"languages": [
			{
				"name": "English",
				"level": 4, // levels is 1 begginer, 2 intermediary, 3 advanced and 4 fluent
			},
			{
				"name": "Spanish",
				"level": 3, // levels is 1 begginer, 2 intermediary, 3 advanced and 4 fluent
			},
			{
				"name": "Portuguese",
				"level": 2, // levels is 1 begginer, 2 intermediary, 3 advanced and 4 fluent
			},
			{
				"name": "Japonese",
				"level": 1, // levels is 1 begginer, 2 intermediary, 3 advanced and 4 fluent
			},
		],
		"skills": [
			{
				"name": "Java",
				"level": 4 // levels is 1 begginer, 2 intermediary, 3 advanced and 4 fluent
			},
			{
				"name": "Python",
				"level": 3 // levels is 1 begginer, 2 intermediary, 3 advanced and 4 fluent
			},
			{
				"name": "Golang",
				"level": 2 // levels is 1 begginer, 2 intermediary, 3 advanced and 4 fluent
			},
			{
				"name": "JavaScript",
				"level": 1 // levels is 1 begginer, 2 intermediary, 3 advanced and 4 fluent
			}
		],
		"extras": [],
		"hobbies": []
	}
)

export { Data }