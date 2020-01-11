import axios from 'axios'
export default function(locale) {
    if (locale == 'ru') {
        axios.get('http://ip-api.com/json')
        .then((d) => {
          if (d.data.countryCode !== 'RU') {
              window.location = window.location.origin + '/en/'
          }
        })
    }
}