




export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
  
    return {
      props: { blog:data}
    };
  };


const  News = ({blog}) => {

  return (
  
   
    <>
    {blog?.map(item => {
        return (
            <div key={item.id}>
            
                <a>
                <h3>{item.title}</h3>
                </a>
            
            </div>
        )
    })}
    </>
  );
}

export default News