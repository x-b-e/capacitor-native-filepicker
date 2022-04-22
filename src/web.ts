import { WebPlugin } from '@capacitor/core';

import type { CapacitorNativeFilePickerPlugin, FilePickerOptions, CreateFileOptions, WriteToFileOptions, FolderPickerToWriteFileOptions } from './definitions';

export class CapacitorNativeFilePickerWeb extends WebPlugin implements CapacitorNativeFilePickerPlugin 
{
    async echo(options: { value: string }): Promise<{ value: string }> {
        console.log('ECHO', options);
        return options;
    }

    async launchFolderPicker(options: { limit: number }): Promise<{ folders: Array<string> }> {
        console.log(`FOLDER PICKER`, options);

        return {
            folders: ["/example-directory1", "/example-directory2"]
        };
    }

    async launchFolderPickerToWriteFile(options: FolderPickerToWriteFileOptions): Promise<{ filepath: string }> {
      console.log(`FOLDER PICKER TO WRITE FILE`, options);

      return {
        filepath: "./example-written-file.txt"
      }
  }
    
    async launchFilePicker(options: FilePickerOptions): Promise<{ files: Array<string> }> {
        console.log('LAUNCH FILE PICKER', options);
        
        return {
            files: ["./example-file1.txt", "./example-file2.txt", "./example-file3.txt"]
        };
    }

    async shareFile(options: { filepath: string }): Promise<void> {
        console.log(`File ${options.filepath} shared!`);
    }

    async getFileUrlForUri(options: { uri: string }): Promise<{ filepath: string }> {
        console.log('getFileUrlForUri', options);

        return {
            filepath: "./example-converted-file.txt"
        };
    }

    async createFile(options: CreateFileOptions): Promise<{ filepath: string }> {
        console.log('createFile', options);

        return {
            filepath: "./example-converted-file.txt"
        }
    }

    async writeToFile(options: WriteToFileOptions): Promise<{ filepath: string }> {
        console.log('writeToFile', options);

        return {
            filepath: "./example-converted-file.txt"
        };
    }

    async fileStat(options: { filepath: string }): Promise<{ mimeType: string, fileSize: number, fileName: string }> {
        console.log('fileStat', options);

        return {
            mimeType: "text/plain",
            fileSize: 100,
            fileName: "example-file.txt"
        };
    }

    async deleteFile(options: { filepath: string }): Promise<void> {
        console.log('deleteFile', options);

        return;
    }

    async renameFile(options: { filepath: string, newFilename: string }): Promise<{filepath: string, filename: string }> {
        console.log('renameFile', options);

        return {
            filepath: "./example-renamed-file.txt",
            filename: "example-renamed-file.txt"
        };
    }
}