/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';

        let config = window.checkoutConfig.payment,
            mesGatewayType = 'merchantesolutions',
            mesHostedCheckoutType = 'merchantesolutions_hosted_checkout';

        if (config[mesGatewayType].isActive) {
            rendererList.push(
                {
                    type: mesGatewayType,
                    component: 'Magento_Merchantesolutions/js/view/payment/method-renderer/cc-form'
                }
            );
        }

        if (config[mesHostedCheckoutType].isActive) {
            rendererList.push(
                {
                    type: mesHostedCheckoutType,
                    component: 'Magento_Merchantesolutions/js/view/payment/method-renderer/hosted-checkout-form'
                }
            );
        }

        return Component.extend({});
    }
);
