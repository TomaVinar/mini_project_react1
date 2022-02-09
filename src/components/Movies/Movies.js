import {useSelector} from 'react-redux';
import {Movie} from '../Movie/Movie';

const Movies = () => {
        const {movies} = useSelector(state => state['movieReducer'])

        return (
            <div>
                {movies.results.map(value => <Movie key={value.id} movie={value}/>)}
            </div>
        );
    }
;

export {Movies};