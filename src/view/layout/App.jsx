import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {FormattedDate, FormattedMessage} from "react-intl";
import { Language} from "Component";

const App = () => {
    return (
        <Container maxWidth="sm">
            <div className="my-4">

                <Typography color="fino" variant="h4" component="h1" gutterBottom>
                    <FormattedMessage id="todo" values={{name: "jose"}}/>
                </Typography>
                <FormattedDate
                    value={new Date(1459913574887)}
                    year="numeric"
                    month="long"
                    day="numeric"
                    weekday="long"
                />
                <Button color="fino"> otro mas</Button>
                <div className="-m-2 text-center">
                    <div className="p-2">
                        <div
                            className="inline-flex items-center bg-white leading-none text-pink-600 rounded-full p-2 shadow text-teal text-sm">
                            <span
                                className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">Pink</span>
                            <span className="inline-flex px-2">Donec sit amet neque risus. Pellentesque leo mauris, dictum et ligula in.</span>
                        </div>
                    </div>
                </div>
                <Slider
                    className="my-4"
                    defaultValue={30}
                    classes={{active: 'shadow-none'}}
                    componentsProps={{thumb: {className: 'hover:shadow-none'}}}
                />
                <Language />
            </div>
        </Container>
    );
};

export default App;

/*
export default function App() {
    return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
    </h1>
    )
}
*/
