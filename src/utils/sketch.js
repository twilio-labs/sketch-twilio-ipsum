import sketch from 'sketch';
import util from 'util';
import faker from 'faker';
import moment from 'moment';
import {
  LocaleShortcodes,
  getWeightedRandomLocale
} from './weightedRandomLocale';
const {DataSupplier} = sketch;

// Helper function to do ceremony around updating sketch
export function updateData({data}, valueGetter) {
  const document = sketch.getSelectedDocument();
  // Iterates over the layers affected by the action
  const affectedItems = util.toArray(data.items).map(sketch.fromNative);

  affectedItems.forEach((item, index) => {
    // Update the locale based on layer name
    let layerName;
    if (item.type === 'Text') {
      const layer = document.getLayerWithID(item.id);
      layerName = layer.name;
    } else if (item.type === 'DataOverride') {
      layerName = item.override.affectedLayer.name;
    }

    const locale = layerName.split('|')[1];

    // Set up locale
    if (locale != null && LocaleShortcodes.includes(locale)) {
      faker.locale = locale;
      moment.locale(locale);
    } else {
      const newLocale = getWeightedRandomLocale();
      faker.locale = newLocale;
      moment.locale = newLocale;
    }

    // Sends the data back to Sketch
    DataSupplier.supplyDataAtIndex(data.key, valueGetter(), index);
  });
}
