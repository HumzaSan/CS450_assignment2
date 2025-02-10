import PropTypes from 'prop-types';
import ProtoType from 'prop-types'

function Student(props) {
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Stuent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.prototype = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

export default Student