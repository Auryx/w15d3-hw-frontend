import { Form, Link, useLoaderData } from "react-router-dom"
function Index(props) {
    const cheese = useLoaderData()

    return (
        <div>
            <h2>Create a Cheese</h2>
            <Form action="/create" method="post">
                <input type="input" name="name" placeholder="Cheese's name" />
                <input type="input" name="image" placeholder="Cheese's picture" />
                <input type="input" name="countryOfOrigin" placeholder="Cheese's Country Of Origin" />
                <input type="submit" value="create cheese" />
            </Form>           
            
            <h2>Cheese</h2>
            {cheese.map(cheese => (
                <div key={cheese._id} className="cheese">
                    <Link to={`/${cheese._id}`}>
                        <h1>{cheese.name}</h1>
                    </Link>
                    <img src={cheese.image} alt={cheese.name} />
                    <h3>{cheese.countryOfOrigin}</h3>
            </div>
        ))}
    </div>
)}
  
export default Index
  