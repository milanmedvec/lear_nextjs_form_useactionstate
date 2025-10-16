"use client";

import { useActionState } from "react";

async function action(state: any, formData: FormData) {
    console.log("Form data received on the server:");
    for (var pair of formData.entries()) {
        console.log("- " + pair[0]+ ": [" + pair[1] + "]");
    }

    return state;
}

export default function() {
    const [state, formAction] = useActionState(action, {});

    return (
        <form action={formAction}>
            <div>
                <textarea name="textarea"></textarea>
            </div>
            <div>
                <input type="text" name="text" />
            </div>
            <div>
                <input type="checkbox" name="checkbox" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}
