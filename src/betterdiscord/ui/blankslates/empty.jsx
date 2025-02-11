import clsx from "clsx";
import SimpleMarkdown from "@structs/markdown";

import React from "@modules/react";
import Strings from "@modules/strings";


function EmptyImage() {
    return <svg fill="none" height="110" viewBox="0 0 240 110" width="240">
    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="39.567" x2="39.567" y1="39.2948" y2="101.804">
    <stop offset="0" stopColor="#72767d"/>
    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
    </linearGradient>
    <clipPath id="b">
    <path d="m0 0h240v110h-240z"/>
    </clipPath>
    <g clipPath="url(#b)">
    <path d="m0 109.243v-5.607c0-2.272.917198-4.3935 2.52229-5.9844l11.77071-11.6667c2.0637-2.0454 3.2102-4.7727 3.2102-7.6515v-14.5454c0-6.6667 5.5032-12.1213 12.2293-12.1213h169.5285c6.726 0 12.229 5.4546 12.229 12.1213v27.2727c0 2.5 2.064 4.5454 4.586 4.5454h11.542c5.732 0 10.318 4.6209 10.318 10.2269v3.41z" fill="#72767d" opacity=".2"/>
    <path d="m83.465 56.2122h-22.1656v53.0298h22.1656z" fill="#36393f"/>
    <path d="m193.529 56.2122h-110.064v53.0298h110.064z" fill="#4f545c"/>
    <path d="m106.395 78.9395h-22.93v30.3025h22.93z" fill="#b9bbbe"/>
    <path d="m109.452 74.3938h-25.987v4.5455h25.987z" fill="#dcddde"/>
    <path d="m83.465 74.3938h-14.5223v4.5455h14.5223z" fill="#72767d"/>
    <path d="m103.338 66.8181h-19.873v7.5758h19.873z" fill="#f6f6f7"/>
    <path d="m83.465 66.8181h-6.879v7.5758h6.879z" fill="#b9bbbe"/>
    <path d="m102.573 82.7273h-15.2864v1.5151h15.2864z" fill="#72767d"/>
    <path d="m102.573 84.2424h-15.2864v1.5152h15.2864z" fill="#4f545c"/>
    <path d="m102.573 85.7576h-15.2864v1.5151h15.2864z" fill="#72767d"/>
    <path d="m102.573 87.2727h-15.2864v1.5152h15.2864z" fill="#4f545c"/>
    <path d="m102.573 88.7878h-15.2864v1.5152h15.2864z" fill="#72767d"/>
    <path d="m102.573 90.303h-15.2864v1.5151h15.2864z" fill="#4f545c"/>
    <path d="m102.573 91.8181h-15.2864v1.5152h15.2864z" fill="#72767d"/>
    <path d="m102.573 93.3333h-15.2864v1.5151h15.2864z" fill="#4f545c"/>
    <path d="m104.102 94.8484h-18.344v3.0303h18.344z" fill="#dcddde"/>
    <path d="m83.465 78.9395h-12.2293v30.3025h12.2293z" fill="#202225"/>
    <path d="m75.0573 94.8485h4.586v-9.8485c0-1.2879-.9936-2.2727-2.293-2.2727s-2.293.9848-2.293 2.2727z" fill="#36393f"/>
    <path d="m185.885 74.394h-16.815v25.758h16.815z" fill="#72767d"/>
    <path d="m183.592 76.6667h-12.229v21.2122h12.229z" fill="#b9bbbe"/>
    <path d="m115.524 109.214h45.86v-37.8789h-45.86z" fill="#72767d"/>
    <path d="m118.582 109.214h39.745v-34.8486h-39.745z" fill="#040405"/>
    <path d="m140.025 73.6362h-3.057v35.6058h3.057z" fill="#72767d"/>
    <path d="m144.611 92.1968h-12.229v6.0606h12.229z" fill="#72767d"/>
    <path d="m120.153 26.6667h-36.688c-5.0446 0-9.172 4.091-9.172 9.091v9.0909h45.86z" fill="#72767d"/>
    <path d="m111.745 26.6667h57.325c5.045 0 9.172 4.091 9.172 9.091v9.0909h-75.669v-9.0909c0-5 4.051-9.091 9.172-9.091z" fill="#b9bbbe"/>
    <path d="m105.631 44.8485v-9.0909c0-3.3333 2.751-6.0606 6.114-6.0606h57.325c3.363 0 6.115 2.7273 6.115 6.0606v9.0909z" fill="#72767d"/>
    <path d="m196.586 38.0303h-113.121v21.9697h113.121z" fill="#dcddde"/>
    <path d="m83.4224 56.9412h110.0636v-3.7879h-110.0636z" fill="#f6f6f7"/>
    <path d="m193.529 47.1213h-110.064v3.7879h110.064z" fill="#f6f6f7"/>
    <path d="m83.4224 44.8201h110.0636v-3.7879h-110.0636z" fill="#f6f6f7"/>
    <path d="m83.465 38.0303h-25.2229v21.9697h25.2229z" fill="#b9bbbe"/>
    <path d="m61.2568 56.9412h22.1656v-3.7879h-22.1656z" fill="#dcddde"/>
    <path d="m61.2568 50.8806h22.1656v-3.7879h-22.1656z" fill="#dcddde"/>
    <path d="m61.2568 44.8201h22.1656v-3.7879h-22.1656z" fill="#dcddde"/>
    <path d="m209.885 2.12121c0-.68182.077-1.439392.23-2.12121-5.351.984848-9.478 5.68182-9.478 11.2879 0 6.3636 5.197 11.4394 11.541 11.4394 5.656 0 10.395-4.0152 11.389-9.394-.688.1515-1.376.2273-2.14.2273-6.421 0-11.542-5.15151-11.542-11.43939z" fill="#b9bbbe"/>
    <path d="m6.19112 73.8636-.99363 1.9697c-.2293.4546.2293.9849.76433.7576l1.98726-.9848c.15287-.0758.30573-.0758.4586 0l1.98722.9848c.4586.2273.9937-.2273.7644-.7576l-.9937-1.9697c-.0764-.1515-.0764-.303 0-.4545l.9937-1.9697c.2293-.4546-.2293-.9849-.7644-.7576l-1.98722.9849c-.15287.0757-.30573.0757-.4586 0l-1.98726-.9849c-.4586-.2273-.99363.2273-.76433.7576l.99363 1.9697c.07643.1515.07643.303 0 .4545z" fill="#b9bbbe"/>
    <path d="m191.465 30.3031-.994 1.9697c-.229.4545.23.9848.765.7576l1.987-.9849c.153-.0757.306-.0757.458 0l1.988.9849c.458.2272.993-.2273.764-.7576l-.994-1.9697c-.076-.1515-.076-.303 0-.4546l.994-1.9697c.229-.4545-.229-.9848-.764-.7575l-1.988.9848c-.152.0758-.305.0758-.458 0l-1.987-.9848c-.459-.2273-.994.2272-.765.7575l.994 1.9697c.076.1516.076.3031 0 .4546z" fill="#4f545c"/>
    <g fill="#dcddde">
    <path d="m235.796 26.2879c-.458 0-.764-.3031-.764-.7576v-.7576c0-.4545.306-.7576.764-.7576.459 0 .764.3031.764.7576v.7576c0 .3788-.382.7576-.764.7576z"/>
    <path d="m235.796 32.3484c-.458 0-.764-.303-.764-.7576v-.7575c0-.4546.306-.7576.764-.7576.459 0 .764.303.764.7576v.7575c0 .3788-.382.7576-.764.7576z"/>
    <path d="m237.707 28.1819c0-.4546.306-.7576.764-.7576h.765c.458 0 .764.303.764.7576 0 .4545-.306.7576-.764.7576h-.765c-.458 0-.764-.3788-.764-.7576z"/>
    <path d="m231.592 28.1819c0-.4546.306-.7576.765-.7576h.764c.459 0 .764.303.764.7576 0 .4545-.305.7576-.764.7576h-.764c-.459 0-.765-.3788-.765-.7576z"/>
    </g>
    <g fill="#040505">
    <path d="m37.2229 93.106c0-1.4394-1.07-2.803-2.5223-3.0303-1.8344-.303-3.4395 1.1363-3.4395 2.8788 0 1.5909-.3057 3.2575-1.1465 4.6212-.3821.6818-.6114 1.5151-.6114 2.3485.0764 2.4238 2.0637 4.3938 4.4331 4.5458 2.6752.151 4.8917-1.97 4.8917-4.6216 0-.8333-.2293-1.5909-.6114-2.197-.6879-1.3636-.9937-2.9545-.9937-4.5454z"/>
    <path d="m32.1783 110c-.3822 0-.6879-.303-.6879-.682v-8.333c0-.379.3057-.682.6879-.682s.6879.303.6879.682v8.333c0 .379-.3057.682-.6879.682z"/>
    <path d="m36.3057 110c-.3822 0-.6879-.303-.6879-.682v-8.333c0-.379.3057-.682.6879-.682s.6879.303.6879.682v8.333c-.0764.379-.3822.682-.6879.682z"/>
    <path d="m182.752 93.106c0-1.4394-1.07-2.803-2.523-3.0303-1.834-.303-3.439 1.1363-3.439 2.8788 0 1.5909-.306 3.2575-1.147 4.6212-.382.6818-.611 1.5151-.611 2.3485.076 2.4238 2.064 4.3938 4.433 4.5458 2.675.151 4.892-1.97 4.892-4.6216 0-.8333-.23-1.5909-.612-2.197-.688-1.3636-.993-2.9545-.993-4.5454z"/>
    <path d="m177.707 110c-.382 0-.688-.303-.688-.682v-8.333c0-.379.306-.682.688-.682s.688.303.688.682v8.333c0 .379-.306.682-.688.682z"/>
    <path d="m181.834 110c-.382 0-.688-.303-.688-.682v-8.333c0-.379.306-.682.688-.682.383 0 .688.303.688.682v8.333c-.076.379-.382.682-.688.682z"/>
    </g>
    <path d="m16.6624 109.242h45.8599l-18.344-65.1512h-9.1719z" fill="url(#a)"/>
    <path d="m32.7134 44.0909h13.7579v-1.5152c0-1.6667-1.3758-3.0303-3.0573-3.0303h-7.6433c-1.6815 0-3.0573 1.3636-3.0573 3.0303z" fill="#dcddde"/>
    <path d="m39.5923 41.8181v-8.7878c0-3.3334 2.6752-5.9849 6.0383-5.9849 3.363 0 6.0382 2.6515 6.0382 5.9849v76.2117" stroke="#dcddde" strokeMiterlimit="10" strokeWidth="2"/>
    </g>
    </svg>;
}

export default function Empty(props) {
    return <div className={clsx("bd-empty-image-container", props.className)}>
                <EmptyImage />
                <div className="bd-empty-image-title">
                    {props.title || Strings.Addons.blankSlateHeaderGeneric}
                </div>
                <div className="bd-empty-image-message">
                    {SimpleMarkdown.parseToReact(props.message || Strings.Addons.blankSlateMessageGeneric)}
                </div>
                {props.children}
            </div>;
}