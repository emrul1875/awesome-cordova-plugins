import { Injectable } from '@angular/core';
import { Cordova, AwesomeCordovaNativePlugin, Plugin } from '@awesome-cordova-plugins/core';

/**
 * @name Call Directory
 * @description
 * This plugin can add phone numbers to an Callkit call directory extension. Call `reloadExtension` after using `addIdentification` and `removeIdentification`
 * to process the changes in the call directory extension.
 * @usage
 * ```typescript
 * import { CallDirectory } from '@awesome-cordova-plugins/call-directory/ngx';
 *
 *
 * constructor(private callDirectory: CallDirectory) { }
 *
 *
 * let items = [{label: "Hello", number: "123"}];
 * this.callDirectory.addIdentification(items)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.callDirectory.reloadExtension()
 *   .then(res: string) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * ```
 * @Interfaces
 * CallDirectoryItem
 * CallDirectoryLog
 */
@Plugin({
  pluginName: 'Call',
  plugin: 'cordova-call',
  pluginRef: 'Call',
  repo: 'https://github.com/emrul1875/CordovaCall.git',
  install:
    'cordova plugin add https://github.com/emrul1875/CordovaCall.git --link --variable EXT_NAME="CordovaCall" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES="NO"',
  installVariables: ['EXT_NAME', 'ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES'],
  platforms: ['Android', 'iOS'],
})
@Injectable()
export class Call extends AwesomeCordovaNativePlugin {
  /**
   * Add identification numbers
   *
   * @param {CallDirectoryItem[]} items Set of numbers with labels
   * @returns {Promise<any>} Returns a promise that resolves when numbers are added
   */
  @Cordova()
  speakerOn(): Promise<any> {
    return;
  }

  /**
   * Add identification numbers
   *
   * @param {CallDirectoryItem[]} items Set of numbers with labels
   * @returns {Promise<any>} Returns a promise that resolves when numbers are added
   */
  @Cordova()
  speakerOff(): Promise<any> {
    return;
  }
}
