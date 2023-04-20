<template>
  <v-container class="py-4 py-lg-8">
    <h3 class="text-h3">
      {{ $t('applyToBoard') }}
    </h3>
    <v-row class="mt-4">
      <v-col cols="12">
        <div class="text-uppercase font-weight-bold primary--text mb-2">
          {{ $t('getInvolved') }}
        </div>
        <div class="text-body-1 mb-2">
          Applications for the 2023-2024 LingoX Executive Board are currently open! You may apply to one or several of the positions on the Executive Board. All materials are due by <b>May 14th, 11:59 pm PDT</b> and we require an <b>application</b> and a <b>resume</b>.
        </div>
        <div class="text-body-1 mb-2">
          Please make a copy of the application and type your answers below each question. In order for your application to be considered complete, you must send a PDF of your application to hr@lingox.org along with your resume by the deadline. Make sure that we have viewing access to all documents or attachments provided!
        </div>
        <div class="text-body-1 mb-2">
          The responsibilities and requirements of all available positions are also attached below.
        </div>
        <div class="my-4">
          <v-btn class="mr-1" href="https://docs.google.com/document/d/1aJ3AVOvUH5KnoSm9hHLNyvsdGzJLPn59WJgB3Q3aU8g" target="_blank" color="primary">
            Board Application
          </v-btn>
          <v-btn color="primary" href="https://docs.google.com/document/d/1DEHcUPme7Td90e8P1t2CKZE-Ab4tKdOhYQUe58IV0lw" target="_blank">
            Position Descriptions
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'ApplyBoardPage',
  head: {
    title: 'Apply to Board'
  }
}
</script>
