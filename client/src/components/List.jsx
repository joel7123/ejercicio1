function List({ note }) {
  return (
    <div className="container-user">
      <h2>{note.tag}</h2>
      <p>{note.category}</p>
      <img src={"image/" + note.image} alt="" />
    </div>
  );
}

export default List;
