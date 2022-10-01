

const Like = ({like, onClick}) => {
    let liked = '';
    if (like) liked = 'fa fa-heart-o';
    else liked = 'fa fa-heart';
    return <i onClick={onClick} style={{ cursor: 'pointer'}} className={liked} aria-hidden='true' />
}

export default Like;