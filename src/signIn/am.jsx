import { AwesomeButtonProgress } from "react-awesome-button";
import { BeakerIcon, TrashIcon } from "@primer/octicons-react"; // custom icons

const Buttons = () => {
    return (
        <>
            <AwesomeButtonProgress
                type="primary"
                onPress={async (element, next) => {
                    // await for something then call
                    await next();
                }}
            >
                Primary Progress
            </AwesomeButtonProgress>
            <AwesomeButtonProgress type="anchor" size="icon" icon={<TrashIcon />} />
        </>
    );
};

export default Buttons;
