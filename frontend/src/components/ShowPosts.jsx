const ShowPosts = ({post}) => {
    return ( 
        <section>
            <h1>{post.vorname} {post.nachname}</h1>
            <p>{post.email}</p>
            <p>{post.nachricht}</p>
        </section>
     );
}
 
export default ShowPosts;