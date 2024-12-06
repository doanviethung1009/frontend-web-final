import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Result } from 'antd';


export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <Result
                status="403"
                title="Unauthorized"
                subTitle=
                {<>

                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </>
                }
                extra={<Button type="primary">
                    <Link to="/">
                        <span>
                            Back to home
                        </span>
                    </Link>
                </Button>}
            />
        </div>
    );
}