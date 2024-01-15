function Timeline() {
    return (
        <div className="my-[40px]">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <li>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 text-base-100">
                        <time className="font-mono italic">
                            03/2023 - 12/2023
                        </time>
                        <div className="text-lg font-black">ClickNext</div>
                        <div className="text-md font-black">
                            Frontend-Developer
                        </div>
                        Setup structural project environment such as axios
                        config, Convert data to xlsx, Create components for the
                        project such as inputs, buttons, DataGrid, Modal,
                        Accordion, Create modules with components and send
                        values for the page implement with vue3 + typescript +
                        Bootstrap 5
                    </div>
                    <hr className="bg-base-100"/>
                </li>
                <li>
                    <hr className="bg-base-100"/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-end mb-10 text-base-100">
                        <time className="font-mono italic">
                            06/2022 - 02/2023
                        </time>
                        <div className="text-lg font-black">Backyard</div>
                        <div className="text-md font-black">
                            Frontend-Engineer
                        </div>
                        FLOWARD is a web-based product for collecting company
                        data. It has 5 main features: 1. Analysis: Analyzes the
                        environment and situation of the organization. 2.Scope:
                        Set the scope of work. 3. Design: Design consistent
                        structures and procedures throughout the organization.
                        4. Prioritize and map: Prioritize tasks. and prepare
                        strategic plans 5. Review and reorganize: Review and
                        reorganize. implement with vue3 + typescript + tailwind
                        CSS and vitest
                    </div>
                    <hr className="bg-base-100"/>
                </li>
                <li>
                    <hr className="bg-base-100"/>
                    <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="timeline-start md:text-end mb-10 text-base-100">
                        <time className="font-mono italic">
                            11/2021 - 04/2022
                        </time>
                        <div className="text-lg font-black">
                            Hydra Data and Consulting
                        </div>
                        <div className="text-md font-black">
                            Full-Stack Developer
                        </div>
                        Booking Cargo Ship It is an advance booking management
                        system for sea freight. Easy to check authenticity and
                        order details. Main features include: admin login,
                        shipping line opening and closing settings, pricing,
                        container sizes, dashboard. Tools used in the project:
                        React, Javascript, Bootstrap 5, nodejs, express.js
                    </div>
                    <hr className="bg-base-100" />
                </li>
            </ul>
        </div>
    );
}
export default Timeline;
