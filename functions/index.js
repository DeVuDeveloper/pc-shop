
admin.initializeApp();

exports.lowercaseProductName = functions.firestore.document('/products/{documentId}')
  .onCreate((snap, context) => {
    const { name } = snap.data();

    functions.logger.log('Lowercasing product name', context.params.documentId, name);

    const lowercaseName = name.toLowerCase();

    return snap.ref.set({ name_lower: lowercaseName }, { merge: true });
  });

