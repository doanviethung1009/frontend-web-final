import CreateTourComponentSingle from '../../components/adminComponents/CreateTourComponentSingle';
import "../../styles/adminStyles/createTour.scss"

const CreateTour = () => {
    return (

        <div className='createTour-container'>
            <fieldset style={{
                border: "1px solid #ccc",
                borderRadius: "5px",
                width: "80%",
            }}>
                <legend className='createTour-title'>
                    Form create tour
                </legend>
                <div className='createTour-content'>
                    <CreateTourComponentSingle />
                </div>

            </fieldset>
        </div >
    );
};

export default CreateTour;