import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from '@deriv/components';
import { localize, Localize } from '@deriv/translations';

const currency_name_map = {
    BTC: { display_code: 'BTC', name: localize('Bitcoin') },
    BCH: { display_code: 'BCH', name: localize('Bitcoin Cash') },
    ETH: { display_code: 'ETH', name: localize('Ether') },
    ETC: { display_code: 'ETC', name: localize('Ether Classic') },
    LTC: { display_code: 'LTC', name: localize('Litecoin') },
    UST: { display_code: 'USDT', name: localize('Tether') },
    USB: { display_code: 'USB', name: localize('Binary Coin') },
    USD: { display_code: 'USD', name: localize('US Dollar') },
    AUD: { display_code: 'AUD', name: localize('Australian Dollar') },
    EUR: { display_code: 'EUR', name: localize('Euro') },
    GBP: { display_code: 'GBP', name: localize('Pound Sterling') },
};

const AccountLimitsInfo = ({ currency, is_virtual }) => (
    <>
        {!is_virtual && (
            <>
                <Icon
                    className='account__inset_header-icon'
                    icon={currency ? `IcCurrency-${currency}` : 'IcCurrencyUnknown'}
                />
                <p className='account__inset_header-subheading'>
                    {currency ? (
                        <Localize
                            i18n_default_text='For your {{currency_name}} ({{currency}}) account'
                            values={{
                                currency_name: currency_name_map[currency.toUpperCase()].name,
                                currency: currency_name_map[currency.toUpperCase()].display_code,
                            }}
                        />
                    ) : (
                        <Localize i18n_default_text='No currency has been set for this account' />
                    )}
                </p>
            </>
        )}
    </>
);

AccountLimitsInfo.propTypes = {
    currency: PropTypes.string,
    is_virtual: PropTypes.bool,
};

export default AccountLimitsInfo;
