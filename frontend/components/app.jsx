import React from 'react';

import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './login_form/login_form_container';
import Home from './home/home_page';
import UserOnboardingContainer from './user_profile/user_onboarding_container';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckCircle)

export const App = () => {
    return (
        <div>
            <header className="main-header">
                <NavbarContainer />
            </header>
            <div className="main"> 
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <Route exact path="/signup" component={UserOnboardingContainer} />
                <Route exact path="/" component={Home} />
            </div>
            <footer>
                <div className="container footer">
                    <div className="row">
                        <div className="col">
                            <h1 className="footer-title">Stitch Clone</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="135" height="40">
                                <title>Apple App store badge</title>
                                <path fill="#A6A6A6" d="M130.197 40H4.729A4.74 4.74 0 0 1 0 35.267V4.726A4.733 4.733 0 0 1 4.729 0h125.468C132.803 0 135 2.12 135 4.726v30.541c0 2.605-2.197 4.733-4.803 4.733z">
                                </path>
                                <path d="M134.032 35.268a3.83 3.83 0 0 1-3.834 3.83H4.729a3.835 3.835 0 0 1-3.839-3.83V4.725A3.84 3.84 0 0 1 4.729.89h125.468a3.834 3.834 0 0 1 3.834 3.835l.001 30.543z">
                                </path>
                                <g fill="#FFF">
                                    <path d="M30.128 19.784c-.029-3.223 2.639-4.791 2.761-4.864-1.511-2.203-3.853-2.504-4.676-2.528-1.967-.207-3.875 1.177-4.877 1.177-1.022 0-2.565-1.157-4.228-1.123-2.14.033-4.142 1.272-5.24 3.196-2.266 3.923-.576 9.688 1.595 12.859 1.086 1.553 2.355 3.287 4.016 3.226 1.625-.067 2.232-1.036 4.193-1.036 1.943 0 2.513 1.036 4.207.997 1.744-.028 2.842-1.56 3.89-3.127 1.255-1.78 1.759-3.533 1.779-3.623-.041-.014-3.387-1.291-3.42-5.154zM26.928 10.306c.874-1.093 1.472-2.58 1.306-4.089-1.265.056-2.847.875-3.758 1.944-.806.942-1.526 2.486-1.34 3.938 1.421.106 2.88-.717 3.792-1.793z">
                                    </path>
                                </g>
                                <g fill="#FFF">
                                    <path d="M53.645 31.504h-2.271l-1.244-3.909h-4.324l-1.185 3.909H42.41l4.284-13.308h2.646l4.305 13.308zm-3.89-5.549L48.63 22.48c-.119-.355-.342-1.191-.671-2.507h-.04a96.75 96.75 0 0 1-.632 2.507l-1.105 3.475h3.573zM64.662 26.588c0 1.632-.441 2.922-1.323 3.869-.79.843-1.771 1.264-2.942 1.264-1.264 0-2.172-.454-2.725-1.362h-.04v5.055H55.5V25.067c0-1.026-.027-2.079-.079-3.159h1.875l.119 1.521h.04c.711-1.146 1.79-1.718 3.238-1.718 1.132 0 2.077.447 2.833 1.342.758.896 1.136 2.074 1.136 3.535zm-2.172.078c0-.934-.21-1.704-.632-2.31-.461-.632-1.08-.948-1.856-.948-.526 0-1.004.176-1.431.523-.428.35-.708.807-.839 1.373-.066.264-.099.48-.099.65v1.6c0 .698.214 1.287.642 1.768s.984.721 1.668.721c.803 0 1.428-.31 1.875-.928.448-.619.672-1.435.672-2.449zM75.699 26.588c0 1.632-.441 2.922-1.324 3.869-.789.843-1.77 1.264-2.941 1.264-1.264 0-2.172-.454-2.724-1.362h-.04v5.055h-2.132V25.067c0-1.026-.027-2.079-.079-3.159h1.875l.119 1.521h.04c.71-1.146 1.789-1.718 3.238-1.718 1.131 0 2.076.447 2.834 1.342.755.896 1.134 2.074 1.134 3.535zm-2.172.078c0-.934-.211-1.704-.633-2.31-.461-.632-1.078-.948-1.855-.948a2.22 2.22 0 0 0-1.432.523c-.428.35-.707.807-.838 1.373-.065.264-.099.48-.099.65v1.6c0 .698.214 1.287.64 1.768.428.48.984.721 1.67.721.803 0 1.428-.31 1.875-.928.448-.619.672-1.435.672-2.449zM88.039 27.772c0 1.132-.393 2.053-1.182 2.764-.867.777-2.074 1.165-3.625 1.165-1.432 0-2.58-.276-3.449-.829l.494-1.777c.936.566 1.963.85 3.082.85.803 0 1.428-.182 1.877-.544.447-.362.67-.848.67-1.454 0-.54-.184-.995-.553-1.364-.367-.369-.98-.712-1.836-1.029-2.33-.869-3.494-2.142-3.494-3.816 0-1.094.408-1.991 1.225-2.689.814-.699 1.9-1.048 3.258-1.048 1.211 0 2.217.211 3.02.632l-.533 1.738c-.75-.408-1.598-.612-2.547-.612-.75 0-1.336.185-1.756.553a1.58 1.58 0 0 0-.533 1.205c0 .526.203.961.611 1.303.355.316 1 .658 1.936 1.027 1.145.461 1.986 1 2.527 1.618.539.616.808 1.387.808 2.307zM95.088 23.508h-2.35v4.659c0 1.185.414 1.777 1.244 1.777.381 0 .697-.033.947-.099l.059 1.619c-.42.157-.973.236-1.658.236-.842 0-1.5-.257-1.975-.77-.473-.514-.711-1.376-.711-2.587v-4.837h-1.4v-1.6h1.4v-1.757l2.094-.632v2.389h2.35v1.602zM105.691 26.627c0 1.475-.422 2.686-1.264 3.633-.883.975-2.055 1.461-3.516 1.461-1.408 0-2.529-.467-3.365-1.401s-1.254-2.113-1.254-3.534c0-1.487.43-2.705 1.293-3.652.861-.948 2.023-1.422 3.484-1.422 1.408 0 2.541.467 3.396 1.402.818.907 1.226 2.078 1.226 3.513zm-2.212.069c0-.885-.189-1.644-.572-2.277-.447-.766-1.086-1.148-1.914-1.148-.857 0-1.508.383-1.955 1.148-.383.634-.572 1.405-.572 2.317 0 .885.189 1.644.572 2.276.461.766 1.105 1.148 1.936 1.148.814 0 1.453-.39 1.914-1.168.393-.645.591-1.412.591-2.296zM112.621 23.783a3.702 3.702 0 0 0-.672-.059c-.75 0-1.33.283-1.738.85-.355.5-.533 1.132-.533 1.895v5.035h-2.131l.02-6.574c0-1.106-.027-2.113-.08-3.021h1.857l.078 1.836h.059c.225-.631.58-1.139 1.066-1.52a2.578 2.578 0 0 1 1.541-.514c.197 0 .375.014.533.039v2.033zM122.156 26.252a5 5 0 0 1-.078.967h-6.396c.025.948.334 1.673.928 2.173.539.447 1.236.671 2.092.671.947 0 1.811-.151 2.588-.454l.334 1.48c-.908.396-1.98.593-3.217.593-1.488 0-2.656-.438-3.506-1.313-.848-.875-1.273-2.05-1.273-3.524 0-1.447.395-2.652 1.186-3.613.828-1.026 1.947-1.539 3.355-1.539 1.383 0 2.43.513 3.141 1.539.563.815.846 1.823.846 3.02zm-2.033-.553c.014-.632-.125-1.178-.414-1.639-.369-.593-.936-.889-1.699-.889-.697 0-1.264.289-1.697.869-.355.461-.566 1.014-.631 1.658h4.441z">
                                    </path>
                                </g>
                                <g fill="#FFF">
                                    <path d="M49.05 10.009c0 1.177-.353 2.063-1.058 2.658-.653.549-1.581.824-2.783.824-.596 0-1.106-.026-1.533-.078V6.982c.557-.09 1.157-.136 1.805-.136 1.145 0 2.008.249 2.59.747.652.563.979 1.368.979 2.416zm-1.105.029c0-.763-.202-1.348-.606-1.756-.404-.407-.994-.611-1.771-.611-.33 0-.611.022-.844.068v4.889c.129.02.365.029.708.029.802 0 1.421-.223 1.857-.669s.656-1.096.656-1.95zM54.909 11.037c0 .725-.207 1.319-.621 1.785-.434.479-1.009.718-1.727.718-.692 0-1.243-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794s.994-.698 1.712-.698c.692 0 1.248.229 1.669.688.4.446.601 1.022.601 1.726zm-1.087.034c0-.435-.094-.808-.281-1.119-.22-.376-.533-.564-.94-.564-.421 0-.741.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .714-.191.94-.574.194-.317.291-.693.291-1.128zM62.765 8.719l-1.475 4.714h-.96l-.611-2.047a15.32 15.32 0 0 1-.379-1.523h-.019a11.15 11.15 0 0 1-.379 1.523l-.649 2.047h-.971l-1.387-4.714h1.077l.533 2.241c.129.53.235 1.035.32 1.513h.019c.078-.394.207-.896.389-1.503l.669-2.25h.854l.641 2.202c.155.537.281 1.054.378 1.552h.029c.071-.485.178-1.002.32-1.552l.572-2.202h1.029zM68.198 13.433H67.15v-2.7c0-.832-.316-1.248-.95-1.248a.946.946 0 0 0-.757.343 1.217 1.217 0 0 0-.291.808v2.796h-1.048v-3.366c0-.414-.013-.863-.038-1.349h.921l.049.737h.029c.122-.229.304-.418.543-.569.284-.176.602-.265.95-.265.44 0 .806.142 1.097.427.362.349.543.87.543 1.562v2.824zM71.088 13.433h-1.047V6.556h1.047v6.877zM77.258 11.037c0 .725-.207 1.319-.621 1.785-.434.479-1.01.718-1.727.718-.693 0-1.244-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794s.994-.698 1.711-.698c.693 0 1.248.229 1.67.688.4.446.601 1.022.601 1.726zm-1.088.034c0-.435-.094-.808-.281-1.119-.219-.376-.533-.564-.939-.564-.422 0-.742.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .713-.191.939-.574.195-.317.291-.693.291-1.128zM82.33 13.433h-.941l-.078-.543h-.029c-.322.433-.781.65-1.377.65-.445 0-.805-.143-1.076-.427a1.339 1.339 0 0 1-.369-.96c0-.576.24-1.015.723-1.319.482-.304 1.16-.453 2.033-.446V10.3c0-.621-.326-.931-.979-.931-.465 0-.875.117-1.229.349l-.213-.688c.438-.271.979-.407 1.617-.407 1.232 0 1.85.65 1.85 1.95v1.736c0 .471.023.846.068 1.124zm-1.088-1.62v-.727c-1.156-.02-1.734.297-1.734.95 0 .246.066.43.201.553a.733.733 0 0 0 .512.184c.23 0 .445-.073.641-.218a.893.893 0 0 0 .38-.742zM88.285 13.433h-.93l-.049-.757h-.029c-.297.576-.803.864-1.514.864-.568 0-1.041-.223-1.416-.669s-.562-1.025-.562-1.736c0-.763.203-1.381.611-1.853.395-.44.879-.66 1.455-.66.633 0 1.076.213 1.328.64h.02V6.556h1.049v5.607c0 .459.012.882.037 1.27zm-1.086-1.988v-.786a1.194 1.194 0 0 0-.408-.965 1.03 1.03 0 0 0-.701-.257c-.391 0-.697.155-.922.466-.223.311-.336.708-.336 1.193 0 .466.107.844.322 1.135.227.31.533.465.916.465.344 0 .619-.129.828-.388.202-.239.301-.527.301-.863zM97.248 11.037c0 .725-.207 1.319-.621 1.785-.434.479-1.008.718-1.727.718-.691 0-1.242-.229-1.654-.689-.41-.459-.615-1.038-.615-1.736 0-.73.211-1.329.635-1.794s.994-.698 1.713-.698c.691 0 1.248.229 1.668.688.4.446.601 1.022.601 1.726zm-1.086.034c0-.435-.094-.808-.281-1.119-.221-.376-.533-.564-.941-.564-.42 0-.74.188-.961.564-.188.311-.281.69-.281 1.138 0 .435.094.808.281 1.119.227.376.543.564.951.564.4 0 .715-.191.941-.574.193-.317.291-.693.291-1.128zM102.883 13.433h-1.047v-2.7c0-.832-.316-1.248-.951-1.248-.311 0-.562.114-.756.343s-.291.499-.291.808v2.796h-1.049v-3.366c0-.414-.012-.863-.037-1.349h.92l.049.737h.029a1.53 1.53 0 0 1 .543-.569c.285-.176.602-.265.951-.265.439 0 .805.142 1.096.427.363.349.543.87.543 1.562v2.824zM109.936 9.504h-1.154v2.29c0 .582.205.873.611.873.188 0 .344-.016.467-.049l.027.795c-.207.078-.479.117-.814.117-.414 0-.736-.126-.969-.378-.234-.252-.35-.676-.35-1.271V9.504h-.689v-.785h.689v-.864l1.027-.31v1.173h1.154v.786zM115.484 13.433h-1.049v-2.68c0-.845-.316-1.268-.949-1.268-.486 0-.818.245-1 .735a1.317 1.317 0 0 0-.049.377v2.835h-1.047V6.556h1.047v2.841h.02c.33-.517.803-.775 1.416-.775.434 0 .793.142 1.078.427.355.355.533.883.533 1.581v2.803zM121.207 10.853c0 .188-.014.346-.039.475h-3.143c.014.466.164.821.455 1.067.266.22.609.33 1.029.33.465 0 .889-.074 1.271-.223l.164.728c-.447.194-.973.291-1.582.291-.73 0-1.305-.215-1.721-.645-.418-.43-.625-1.007-.625-1.731 0-.711.193-1.303.582-1.775.406-.504.955-.756 1.648-.756.678 0 1.193.252 1.541.756.281.4.42.895.42 1.483zm-1-.271a1.411 1.411 0 0 0-.203-.805c-.182-.291-.459-.437-.834-.437a.995.995 0 0 0-.834.427 1.586 1.586 0 0 0-.311.815h2.182z">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <div className="col">
                            <h3 className="footer-list-titles">THE SERVICE</h3>
                            <ul className="footer-list">
                                <li>Gift Cards</li>
                                <li>iPhone App</li>
                                <li>Plus Sizes</li>
                                <li>Maternity</li>
                                <li>Petite</li>
                                <li>Big & Tall</li>
                                <li>Women's Jeans</li>
                                <li>Business Casual</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="footer-list-titles">THE COMPANY</h3>
                            <ul className="footer-list">
                                <li>About Us</li>
                                <li>Press</li>
                                <li>Investor Relations</li>
                                <li>Careers</li>
                                <li>Tech Blog</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="footer-list-titles">HAVE A QUESTION?</h3>
                            <ul className="footer-list">
                                <li>FAQ</li>
                                <li>Help</li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="footer-list-titles">CONTENT</h3>
                        </div>
                    </div>
                </div>
                <div className="container footer-2">
                    <div className="row">
                        <div className="col">
                            <h3 className="footer-2-title">Stitch Clone and Clone are trademarks of Stitch Clone, Inc</h3>
                        </div>
                        <ol className="col">

                        </ol>
                    </div>
                </div>
            </footer>
        </div>
    )
}

