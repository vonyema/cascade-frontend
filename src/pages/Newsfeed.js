import Posts from "../components/Posts";
import Card from 'react-bootstrap/Card';

const Newsfeed = (props) => {

    return (
        <div className="newsfeed">
            <Card className="createPost" style={{ width: '30rem' }}>
                <Card.Body>
                    <form action="">
                        <input className="createInput" type="text" name="title" placeholder="Title" /><br />
                        <input className="createInput" type="text" name="image" placeholder="Image URL" /><br />
                        <input className="createInput" type="text" name="content" placeholder="Say something fun!" /><br />
                        <input className="createSubmit" type="submit" value="Post" />
                    </form>
                </Card.Body>
            </Card>
            <Posts posts={props.posts} URL={props.URL} getPosts={props.getPosts} />
        </div>
    )
};

export default Newsfeed;